import { English } from './subject/English.jsx'
import { Card } from '../components/Card.jsx'

export function CourseList({user}) {
  
  return(
    <section id="link" className="min-h-screen bg-ctp-base flex flex-col gap-5 justify-center items-center">
      <Card link={'practice/english'} title="English" description="Learn english grammar" />
      <Card link={'practice/math'} title="Math" description="Learn math " />
    </section>
  );
}
