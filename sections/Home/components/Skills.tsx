import DetailsSection from 'components/DetailsSection'

export default function Skills() {
  return (
    <DetailsSection
      title="tech stack"
      description={
        <>
          Recently i’ve been working with <strong>React</strong>,{' '}
          <strong>TypeScript</strong>, <strong>GraphQL</strong> and{' '}
          <strong>Laravel</strong>, and I'm learning more about mobile
          development with Kotlin with Jetpack Compose.
        </>
      }
    />
  )
}