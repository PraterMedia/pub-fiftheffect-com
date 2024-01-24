import clsx from 'clsx';
import {useState, useRef} from 'react';
import {InlineWidget} from 'react-calendly';

const contactTabs = [
  {
    label: 'Schedule A Call',
    content: (
      <InlineWidget url="https://calendly.com/fiftheffect/potential-partnerships?hide_event_type_details=1&hide_gdpr_banner=1&text_color=121212&primary_color=3693ff" />
    ),
  },
  {
    label: 'Send a Message',
    content: 'Send a Message',
  },
];
export function ContactHero({
  heading,
  description,
  secondaryHeading,
  secondaryDescription,
}) {
  const tabRefs = useRef({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index) => setSelectedIndex(index);
  const setIndex = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };
  const onKeyDown = (event) => {
    const count = contactTabs.length;
    const nextTab = () => setIndex((selectedIndex + 1) % count);
    const prevTab = () => setIndex((selectedIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    };

    const action = keyMap[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <section className="py-8 md:py-14">
      <div
        className="container flex flex-col items-center justify-between gap-x-8 md:flex-row"
        aria-orientation="horizontal"
      >
        <div className="w-full md:w-1/2 lg:w-3/5">
          {heading && (
            <h1 className="mb-5 max-w-[18ch] text-5xl leading-solid tracking-wide md:text-6xl lg:text-7xl">
              {heading}
            </h1>
          )}
          {description && (
            <div
              className="max-w-[40ch] text-xl font-light tracking-wide md:text-1/2xl"
              dangerouslySetInnerHTML={{__html: description}}
            ></div>
          )}
          <div className="flex justify-end md:justify-start">
            <div className="mt-8 grid w-full max-w-72 grid-cols-2 items-center gap-1 rounded border border-solid border-light-gray p-[2px] md:max-w-96 lg:mt-12">
              {contactTabs.map((tab, index) => (
                <button
                  key={`tab-${index}`}
                  onClick={() => handleClick(index)}
                  ref={(element) => (tabRefs.current[index] = element)}
                  onKeyDown={onKeyDown}
                  onFocus={() => setSelectedIndex(index)}
                  tabIndex={selectedIndex === index ? 0 : -1}
                  className={clsx(
                    selectedIndex === index
                      ? 'bg-secondary-accent'
                      : 'bg-borders',
                    'rounded px-4 py-2 text-center text-xs font-medium text-dark transition duration-300 hover:opacity-85 md:px-8 md:py-4 md:text-base',
                  )}
                  role="tab"
                  aria-controls={`panel-id-${index}`}
                  aria-selected={selectedIndex === index}
                  id={`tab-id-${index}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <ContactSecondaryContent
            className="mt-14 hidden md:block"
            secondaryHeading={secondaryHeading}
            secondaryDescription={secondaryDescription}
          />
        </div>
        <div className="mt-9 md:mt-0 md:flex-1">
          {contactTabs.map((tab, index) => (
            <div
              key={`tabpanel-${index}`}
              hidden={selectedIndex !== index}
              role="tabpanel"
              aria-labelledby={`tab-id-${index}`}
              id={`panel-id-${index}`}
              tabIndex={0}
            >
              <h2 className="text-3xl"> {tab.content}</h2>
            </div>
          ))}
        </div>
        <ContactSecondaryContent
          className="mt-8 block md:hidden"
          secondaryHeading={secondaryHeading}
          secondaryDescription={secondaryDescription}
        />
      </div>
    </section>
  );
}
const ContactSecondaryContent = ({
  className,
  secondaryHeading,
  secondaryDescription,
}) => {
  if (!secondaryHeading || !secondaryDescription) return;

  return (
    <div className={className}>
      {secondaryHeading && (
        <h3 className="mb-7 text-3xl font-bold leading-tight tracking-wide md:mb-3 md:text-2xl">
          {secondaryHeading}
        </h3>
      )}
      {secondaryDescription && (
        <div className="space-y-4 text-base font-light leading-normal tracking-wide md:space-y-5 md:text-xl">
          {secondaryDescription}
        </div>
      )}
    </div>
  );
};
