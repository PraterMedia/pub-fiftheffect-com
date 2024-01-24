import {SectionHeader} from '~/components/SectionHeader';
import teamWilliam from '../../public/images/team_william.jpg';
import teamAg from '../../public/images/team_ag.jpg';
import teamJessica from '../../public/images/team_jessica.jpg';

function getOurTeam() {
  return [
    {
      image: teamWilliam,
      role: 'President & Strategist',
      name: 'William P.',
    },
    {
      image: teamAg,
      role: 'Engineering Team Lead',
      name: 'Ali G.',
    },
    {
      image: teamJessica,
      role: 'Production Manager',
      name: 'Jessica S.',
    },
  ];
}
export function OurTeam() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-2/6">
            <SectionHeader
              title="Our Team"
              description={
                <>
                  <span className="mb-4 mt-6 block text-base font-light leading-snug tracking-wide md:text-lg">
                    Seven+ people, five nations, and one common purpose. We
                    share a lifelong curiosity that's satisfied by the work we
                    do for others.
                  </span>
                  <span className="block text-base font-light leading-snug tracking-wide md:text-lg">
                    We're real people. Names, interests, all that stuff!
                  </span>
                </>
              }
            />
          </div>
          <div className="flex flex-1 gap-x-5 overflow-auto pb-5 md:gap-x-8 md:overflow-visible md:pb-0">
            {getOurTeam().map((teamMember, index) => (
              <div
                className="w-5/12 flex-shrink-0 flex-grow-0 basis-auto md:w-auto md:flex-1"
                key={index}
              >
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  width={978}
                  height={800}
                  className="h-auto w-full"
                />
                <div className="pt-5">
                  <span className="block text-base font-light leading-snug tracking-wide">
                    {teamMember.role}
                  </span>
                  <span className="block text-lg font-medium leading-snug tracking-wide">
                    {teamMember.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
