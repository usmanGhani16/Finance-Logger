import { Invoice } from './classes/Invoice'
import { Payment } from './classes/Payment'
import { ListTemplate } from './classes/ListTemplate'
import { HaseFormatter } from './interfaces/HasFormatter'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HaseFormatter;

  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');

});