import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import clsx from 'clsx';

import {missingClass} from '~/lib/utils';

export const Button = forwardRef(
  (
    {
      as = 'button',
      className = '',
      variant = 'primary',
      width = 'auto',
      ...props
    },
    ref,
  ) => {
    const Component = props?.to ? Link : as;

    const baseButtonClasses =
      'inline-block text-center text-base font-medium transition duration-300 leading-none';

    const variants = {
      primary: `${baseButtonClasses} rounded border border-solid px-8 py-4 bg-secondary-accent border-secondary-accent text-dark hover:bg-dark hover:text-white hover:border-dark`,
      secondary: `${baseButtonClasses} rounded border border-solid px-8 py-4 border-secondary-accent bg-white text-secondary-accent hover:bg-secondary-accent hover:text-white`,
      inline: 'p-0 text-dark hover:text-primary-accent font-bold',
      inlineWhite: 'p-0 text-white hover:text-dark font-bold',
      inlineAccent: 'p-0 text-primary-accent hover:text-dark font-bold',
    };

    const widths = {
      auto: 'w-auto',
      full: 'w-full',
    };

    const styles = clsx(
      missingClass(className, 'bg-') && variants[variant],
      missingClass(className, 'w-') && widths[width],
      missingClass(className, 'text-dark') && widths[width],
      missingClass(className, 'hover:text-') && widths[width],
      className,
    );

    return (
      <Component
        // @todo: not supported until react-router makes it into Remix.
        // preventScrollReset={true}
        className={styles}
        {...props}
        ref={ref}
      />
    );
  },
);
