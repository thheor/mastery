import { English } from './subject/English.jsx'
import { Card } from '../components/Card.jsx'
import { Flashcard } from '../components/Flashcard.jsx'

export function CardList({user}) {
  
  return(
    <section className="min-h-screen bg-ctp-base flex flex-col gap-5 justify-center items-center">
      <Card title="Flashcards" description="Better study with flashcards" />
      <Card title="Create Flashcards" description="Create your own flashcards" />
    </section>
  );
}
