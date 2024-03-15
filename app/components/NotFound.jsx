import {Icon404} from './Icon';

export function NotFound() {
  const heading = `Page does not exist`;
  const description = `This page was not found.<br>You may have mistyped something, or the page may have moved.`;

  return (
    <>
      <div className="mx-auto my-10 max-w-[80%] sm:max-w-[45%]">
        <Icon404 className="h-auto w-full" />
      </div>
      <h1 className="mb-5 text-2xl font-medium md:text-6xl">{heading}</h1>
      <p dangerouslySetInnerHTML={{__html: description}}></p>
    </>
  );
}
