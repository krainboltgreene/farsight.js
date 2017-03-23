export default function html (data: CuratedTwitterStatusType): string {
  return `
    <section data-twitter-id="${data.status.id}">

    </section>
  `
}
