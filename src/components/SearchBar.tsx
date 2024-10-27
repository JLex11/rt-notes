import { setSearch } from "../store/notesFilters"

export default function SearchBar() {
  return (
    <div>
      <label
        for='search-notes'
        class='bg-[#f0f0f0] rounded-xl px-4 py-2 flex gap-2 w-96'
      >
        <span>🔍</span>
        <input
          type='search'
          name='search-notes'
          id='search-notes'
          placeholder='Reply to emails, Action items...'
          class='bg-transparent border-none focus:border-none focus:outline-none w-full'
          onInput={(e) => {
            setSearch((e.currentTarget)?.value || '')
          }}
        />
      </label>
    </div>
  )
}