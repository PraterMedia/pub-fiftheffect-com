import {Icon404} from './Icon';

export function NotFound() {
  const heading = `Page does not exist`;
  const description = `This page was not found.<br>You may have mistyped something, or the page may have moved.`;

  return (
    <>
      <div className="mx-auto my-16 max-w-[343px] md:max-w-[635px] lg:max-w-[855px]">
        <Icon404 className="h-auto w-full" />
      </div>
      <h1 className="mb-6 text-2xl font-medium md:text-6xl">{heading}</h1>
      <p dangerouslySetInnerHTML={{__html: description}}></p>
    </>
  );
}
