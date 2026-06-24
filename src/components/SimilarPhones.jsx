import PhoneCard from './PhoneCard'

export default function SimilarPhones({ phones }) {
  return (
    <section className="similar-phones">
      <h2 className="similar-phones__title">Similar items</h2>
      <ul className="similar-phones__track">
        {phones.map((phone) => (
          <li key={phone.id}>
            <PhoneCard phone={phone} />
          </li>
        ))}
      </ul>
    </section>
  )
}
