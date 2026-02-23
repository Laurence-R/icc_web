"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  type: string;
  organization?: string;
  description?: string;
  year?: string | number;
}

interface ServiceSectionProps {
  icon: LucideIcon;
  iconBgFrom: string;
  iconBgTo: string;
  title: string;
  subtitle: string;
  titleGradient: string;
  borderColor: string;
  hoverBorderColor: string;
  services: ServiceItem[];
  columns?: 1 | 2;
  animationDelay?: number;
  /** "year" shows service.year, "type" shows service.type as badge, custom string shows static text */
  badgeMode?: "year" | "type" | string;
  badgeClassName?: string;
}

export default function ServiceSection({
  icon: Icon,
  iconBgFrom,
  iconBgTo,
  title,
  subtitle,
  titleGradient,
  borderColor,
  hoverBorderColor,
  services,
  columns = 2,
  animationDelay = 0.5,
  badgeMode = "year",
  badgeClassName,
}: ServiceSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <motion.div
          className={`p-3 bg-gradient-to-br ${iconBgFrom} ${iconBgTo} rounded-xl`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <div>
          <h2
            className={`text-2xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}
          >
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2" : ""} gap-6`}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: animationDelay + 0.1 + index * 0.05,
            }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <Card
              className={`border-l-4 ${borderColor} hover:shadow-xl transition-all ${hoverBorderColor} h-full`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg transition-colors">
                    {service.title}
                  </CardTitle>
                  {badgeMode === "year" && service.year && (
                    <Badge
                      variant="outline"
                      className={badgeClassName ?? "ml-2"}
                    >
                      {service.year}
                    </Badge>
                  )}
                  {badgeMode === "type" && (
                    <Badge className={badgeClassName ?? ""}>{service.type}</Badge>
                  )}
                  {badgeMode !== "year" && badgeMode !== "type" && (
                    <Badge
                      variant="secondary"
                      className={badgeClassName ?? ""}
                    >
                      {badgeMode}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {service.organization && (
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>機構：</strong>
                    {service.organization}
                  </p>
                )}
                {service.description && (
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
