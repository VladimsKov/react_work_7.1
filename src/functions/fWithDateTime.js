import DateTime from "../components/DateTime";
import correctDate from "./correctDate";

function fWithDateTime(Component) {
  return function(props, ...args) {
    const corrDate = {
      date: correctDate(props.date)
    }
    const newProps = { ...props, ...corrDate }
    return Component.apply(this, [newProps, ...args]);
  }
}

const DateTimePretty = fWithDateTime(DateTime);
export default DateTimePretty;