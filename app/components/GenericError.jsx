import {IconOops} from './Icon';

export function GenericError() {
  const heading = `Something’s wrong here.`;
  let description = `We found an error while loading this page.`;
  return (
    <>
      <div className="mx-auto my-10 max-w-[80%] sm:max-w-[45%]">
        <IconOops className="h-auto w-full" />
      </div>
      <h1 className="mb-5 text-2xl font-medium md:text-6xl">{heading}</h1>
      <p dangerouslySetInnerHTML={{__html: description}}></p>
    </>
  );
}
