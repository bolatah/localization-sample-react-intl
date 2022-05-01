import logo from "./logo.svg";
import "./App.css";
import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedTime,
} from "react-intl";
import { useContext } from "react";
import { Context } from "./components/Wrapper";

function App(props) {
  const context = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="Edit <code>{fileName}</code> js save to reload."
            values={{
              fileName: "src/App.js",
              code: (word) => <code>{word}</code>,
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.content" defaultMessage="Learn React" />
        </a>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
          values={{ blogName: "Lokalise" }}
        />
        <FormattedPlural
          id="app.plural"
          defaultMessage="{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong fromat}}"
          values={{ amount: 90 }}
        />
        <br />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
        <br />
        <FormattedNumber
          value={20.42}
          //eslint-disable-next-line
          style="currency"
          currencyDisplay="symbol"
          currency="USD"
        />
        <br />
        <FormattedNumber value={10000} />
        <br />
        <FormattedTime
          value={new Date()}
          hour="numeric"
          minute="numeric"
          second="numeric"
          timeZoneName="long"
        />
      </header>
    </div>
  );
}

export default App;
