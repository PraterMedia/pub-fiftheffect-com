import {IconHeart} from '~/components/Icon';

export function AtTheHeart() {
  return (
    <section className="flex items-center bg-borders py-19 md:min-h-[780px]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-x-20 md:flex-nowrap">
          <div className="relative flex items-center justify-center self-stretch md:text-center">
            <IconHeart className="absolute left-1/2 top-0 h-auto w-72 max-w-full -translate-x-1/2 -translate-y-1/4 text-primary-accent-light md:top-1/2 md:-translate-y-1/2" />
            <h2 className="relative mb-7 text-3xl font-medium leading-tight md:mb-0 md:text-4xl lg:text-6xl">
              At The Heart Of It All
            </h2>
          </div>
          <div className="relative md:w-[550px] lg:w-[600px]">
            <h3 className="mb-10 text-xl leading-tight md:mb-4 md:text-2xl lg:mb-6 lg:text-4xl">
              We feel extremely fortunate to be involved with the work we do
              everyday.
            </h3>
            <div className="text-base lg:text-xl">
              <p className="mb-7">
                We are a tight-knit, laser-focused unit with one purpose,
                helping our clients connect with customers and achieve their
                goals.
              </p>
              <p>
                We listen to your needs and get to work executing a plan of
                action that meets and exceeds expectations. More than one-off
                results, we're capable of working with your vision as it
                expands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
