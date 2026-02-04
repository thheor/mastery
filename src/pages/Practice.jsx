import { English } from './subject/English.jsx'
import { Card } from '../components/Card.jsx'
import { ToLogin } from '../components/ToLogin.jsx'

export function Practice({user}) {
  
  return(
    <section id="link" className="min-h-screen bg-ctp-base flex flex-col gap-5 justify-center items-center">
      <Card link={'practice/english'} title="English" description="Learn english grammar" />
      <Card link={'practice/math'} title="Math" description="Learn math " />
      <ToLogin title="Login to track your progress" className="flex flex-col justify-center items-center" />
    </section>
  );
}
