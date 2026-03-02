# Deployment Guide

This document describes the steps required to deploy the professor academic website on a university Linux server. The application runs as a Node.js server process managed by PM2, served to the public through an Nginx reverse proxy.

## Prerequisites

The following software must be installed on the server before proceeding:

- **Node.js** 18.17 or later
- **npm** 9 or later
- **PM2** (Node.js process manager)
- **Nginx**
- **Git**

### Install Node.js (if not already installed)

The recommended method is to use the NodeSource distribution:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify the installation:

```bash
node -v
npm -v
```

### Install PM2

```bash
sudo npm install -g pm2
```

### Install Nginx

```bash
sudo apt-get install -y nginx
```

---

## Deployment Steps

### 1. Clone the Repository

Navigate to the directory where you want to host the application, then clone the repository:

```bash
cd /var/www
git clone <repository-url> prof-site
cd prof-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Application

```bash
npm run build
```

This generates an optimized production build in the `.next` directory.

### 4. Start the Application with PM2

Start the Next.js production server and register it with PM2:

```bash
pm2 start npm --name "prof-site" -- start
```

By default, Next.js listens on port `3000`. To use a different port, set the `PORT` environment variable:

```bash
PORT=3001 pm2 start npm --name "prof-site" -- start
```

Save the PM2 process list so it restarts automatically after a server reboot:

```bash
pm2 save
pm2 startup
```

Run the command printed by `pm2 startup` with `sudo` to enable the startup hook.

### 5. Configure Nginx as a Reverse Proxy

Create a new Nginx server block configuration file:

```bash
sudo nano /etc/nginx/sites-available/prof-site
```

Paste the following configuration, replacing `your.domain.or.ip` with the actual domain name or IP address, and adjusting the port if you changed it in the previous step:

```nginx
server {
    listen 80;
    server_name your.domain.or.ip;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the configuration and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/prof-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

The site should now be accessible at `http://your.domain.or.ip`.

---

## Updating the Site

When new changes are pushed to the repository, follow these steps to deploy the update:

```bash
cd /var/www/prof-site
git pull
npm install
npm run build
pm2 restart prof-site
```

---

## Useful PM2 Commands

| Command                 | Description                 |
| ----------------------- | --------------------------- |
| `pm2 list`              | Show all running processes  |
| `pm2 logs prof-site`    | View application logs       |
| `pm2 restart prof-site` | Restart the application     |
| `pm2 stop prof-site`    | Stop the application        |
| `pm2 delete prof-site`  | Remove the process from PM2 |

---

## Environment Variables

If the application requires environment variables (for example, a custom port), create a `.env.local` file in the project root before building:

```bash
nano /var/www/prof-site/.env.local
```

Example contents:

```
PORT=3000
```

Next.js automatically loads `.env.local` at runtime. Never commit this file to version control.

---

## Firewall

Ensure that port 80 (HTTP) and port 443 (HTTPS, if SSL is configured) are open on the server firewall:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

---

## SSL / HTTPS (Optional)

If a domain name is configured and HTTPS is required, the recommended approach is to use Certbot with Let's Encrypt:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your.domain
```

Certbot will automatically modify the Nginx configuration and set up certificate renewal.
