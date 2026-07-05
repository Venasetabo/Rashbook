export default function H1Title({ h1Title, h1TitleStyle }) {
  return (
    <>
      <h1
        className={`
          text-2xl font-bold  cursor-pointer
           ${h1TitleStyle}`}
      >
        {h1Title}
      </h1>
    </>
  )
}
