import {IconOops} from './Icon';

export function GenericError() {
  const heading = `Something’s wrong here.`;
  let description = `We found an error while loading this page.`;
  return (
    <>
      <div className="mx-auto my-16 max-w-[343px] md:max-w-[635px] lg:max-w-[855px]">
        <IconOops className="h-auto w-full" />
      </div>
      <h1 className="mb-6 text-2xl font-medium md:text-6xl">{heading}</h1>
      <p dangerouslySetInnerHTML={{__html: description}}></p>
    </>
  );
}
