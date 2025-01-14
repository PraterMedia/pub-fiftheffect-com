import clsx from 'clsx';
import {missingClass} from '~/lib/utils';
import {LottiePlayer} from '~/components/LottiePlayer';
import {Button} from '~/components/Button';
import {IconArrow} from './Icon';
import {m} from 'framer-motion';

export function Hero({
  highlighted,
  heading,
  description,
  cta,
  media,
  className = '',
}) {
  const Heading = heading?.useH1 ? 'h1' : 'h2';
  return (
    <section
      className={clsx(
        highlighted ? 'bg-borders' : '',
        missingClass(className, 'pb-') &&
          missingClass(className, 'pt-') &&
          'py-8 md:py-14',
        className,
      )}
    >
      <div
        className={clsx(
          media
            ? 'items-center justify-between gap-x-8 md:flex-row'
            : 'lg:text-center',
          'container flex flex-col',
        )}
      >
        <div className={media && `w-full md:w-1/2 md:max-w-xl`}>
          {heading?.content && (
            <Heading
              className={clsx(
                media ? 'max-w-[17ch]' : '',
                'mb-5 text-5xl leading-snug md:mb-8 md:text-6xl md:leading-solid lg:mb-12 lg:text-7xl',
              )}
            >
              {heading.content}
            </Heading>
          )}
          {description?.content && (
            <div
              className={clsx(
                media ? 'max-w-[37ch]' : '',
                'text-xl md:text-2xl',
              )}
              dangerouslySetInnerHTML={{__html: description.content}}
            ></div>
          )}

          {cta?.content && (
            <Button
              to={cta?.to}
              className={clsx(
                cta?.variant == 'inlineAccent'
                  ? 'flex items-center gap-x-2'
                  : '',
                cta?.variant == 'inlineAccent' && !media
                  ? 'lg:justify-center'
                  : '',
                'mt-8 lg:mt-14',
              )}
              variant={cta?.variant ? cta.variant : 'primary'}
            >
              {cta.content}
              {cta?.variant == 'inlineAccent' && (
                <IconArrow viewBox="0 0 19 12" className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
        {media?.src && (
          <div
            className={clsx(
              media?.type === 'lottie' ? '' : 'mt-8 md:mt-0 ',
              'md:w-1/2 md:flex-1',
            )}
          >
            {media?.type === 'lottie' ? (
              <LottiePlayer src={media.src} />
            ) : (
              <img
                sizes={media?.sizes}
                srcSet={media?.srcSet}
                src={media?.src}
                width={media?.width}
                height={media?.height}
                className="h-auto w-full shadow-media"
                alt="Ecommerce product"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
