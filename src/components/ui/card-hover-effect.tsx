import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState } from "react";

export type HoverEffectItem = {
  title: string;
  description: string;
  link: string;
  icon?: React.ComponentType<{ className?: string }>;
  gradient?: string;
  details?: string;
};

export const HoverEffect = ({
  items,
  className,
  layoutId = "hoverBackground",
  hoverClassName,
  cardClassName,
  renderCard,
}: {
  items: HoverEffectItem[];
  className?: string;
  layoutId?: string;
  hoverClassName?: string;
  cardClassName?: string;
  renderCard?: (item: HoverEffectItem, index: number) => React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.span
              className={cn(
                "absolute inset-0 h-full w-full block rounded-3xl",
                "bg-blue-50 dark:bg-slate-800/60",
                hoverClassName
              )}
              layoutId={layoutId}
              initial={false}
              transition={{
                type: "spring",
                bounce: 0.15,
                duration: 0.5,
              }}
            />
          )}
          {renderCard ? (
            renderCard(item, idx)
          ) : (
            <Card className={cardClassName}>
              {item.icon && item.gradient && (
                <CardIcon Icon={item.icon} gradient={item.gradient} />
              )}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.details && (
                <CardDetails>{item.details}</CardDetails>
              )}
              {item.gradient && <CardAccentLine gradient={item.gradient} />}
            </Card>
          )}
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-8 overflow-hidden relative z-20",
        "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
        "border border-slate-200/60 dark:border-white/10",
        "group-hover:border-slate-300/80 dark:group-hover:border-white/20",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardIcon = ({
  Icon,
  gradient,
  className,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6",
        "bg-gradient-to-br",
        gradient,
        "transition-transform duration-300 group-hover:scale-110",
        className
      )}
    >
      <Icon className="h-7 w-7 text-white" />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-slate-600 dark:text-slate-400 font-medium mb-4",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardDetails = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-sm text-slate-500 dark:text-slate-400 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardAccentLine = ({
  gradient,
  className,
}: {
  gradient: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r opacity-50",
        "group-hover:w-full transition-all duration-500",
        gradient,
        className
      )}
    />
  );
};
