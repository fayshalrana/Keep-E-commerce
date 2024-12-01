import React from 'react';
import SectionHeader from '../../../shared/SectionHeader/SectionHeader';
import LeaderCart from './LeaderCart';
import leader1 from '../../../../assets/images/leaders/leader1.png';
import leader2 from '../../../../assets/images/leaders/leader2.png';
import leader3 from '../../../../assets/images/leaders/leader3.png';

const teamData = [
  { img: leader1, name: 'Brooklyn Simmons', ocap: 'Project Manager' },
  { img: leader2, name: 'Annette Black', ocap: 'Marketing Expert' },
  { img: leader3, name: 'Jerome Bell', ocap: 'Web Developer' },
  { img: leader1, name: 'Brooklyn Simmons', ocap: 'Project Manager' },
];

const OurTeam = () => {
  return (
    <section className='py-[104px]'>
      <div className="container_fluid">
        <div className="">
          <SectionHeader title={"The Leader Board Of Our Company"} subTitle={"Team"} />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((leader, index) => (
            <LeaderCart key={index} img={leader.img} name={leader.name} ocap={leader.ocap} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;