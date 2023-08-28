///import './App.css';

function App() {
  const tParagraph = {
    backgroundColor: 'blue',
    color: 'white'
  };

  return (
      <div>
        <h1 class="titleOfPage">Pigeon</h1>
        <p style={tParagraph}>Tis is a bird</p>
        <p>There atre trwo wings</p>
        <p>There are brain with navigating system</p>
        <div>
          <h2>Provide some help to pigeon is a responsibile.</h2>
          <p>It a Human responsibility...</p>
          <h2>Pigeon is environment friendly.</h2>
          <p>Muslims is like to feed the pigeon with caging them.</p>
        </div>
        <div class="button-container">
            <a class="button-class" href="testing2.html" target="_blank">Go to Kings page</a>
            <a class="button-class" href="PsudoClass.html">Practice of psudo class</a>
            <a class="button-class" href="testCombinator.html">Practice of Combinator class</a>
        </div>
      </div>
  );
}

export default App;
