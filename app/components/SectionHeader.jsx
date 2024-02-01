import clsx from 'clsx';

export function SectionHeader({
  pretitle,
  title,
  description,
  descriptionStyle,
  align,
  hideTitleMobile,
  className,
}) {
  let textAlignment = 'text-left';
  if (align == 'right') textAlignment = 'lg:text-right text-left';
  else if (align == 'center') textAlignment = 'text-center';

  return (
    <div className={clsx(className, textAlignment)}>
      {pretitle && (
        <div className="text-sm font-light uppercase leading-relaxed text-gray">
          {pretitle}
        </div>
      )}
      {title && (
        <h2
          className={clsx(
            hideTitleMobile ? 'hidden' : '',
            description ? 'mb-1' : 'mb-4',
            'text-3xl font-medium leading-tight sm:block md:text-4xl lg:text-6xl',
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={
            descriptionStyle == 'lg' ? 'mt-4 text-lg md:text-xl' : 'text-lg'
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
