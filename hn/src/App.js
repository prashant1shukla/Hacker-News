import {useState, useEffect} from "react"
import {format} from "date-fns"

function App() {
  const [items, setItems]= useState([])
  const [query, setQuery]= useState("programming")
  const [text, setText]= useState("")
  const [largeTitle, setLargeTitle]= useState([])
  const [isLoading, setIsLoading]= useState(true)

  return (
    <section className="section">
      <form autoComplete="off">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for something"
        />
        <button>Search</button>
      </form>
      <article class="title">
        <h1>Big Title here</h1>
        <a href="#">Read Full article</a>
      </article>
      <article class="cards">
        <div>
          <h2>Heading 2</h2>
          <ul>
            <li>By Prashant</li>
            <li><a href="">Read Full article</a></li>
          </ul>
          <p>Date</p>
        </div>
      </article>
    </section>
  );
}

export default App;
