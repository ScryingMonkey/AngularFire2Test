export interface Monkey {
    key: string, // How the monkey is summoned from the barrel
	blurb: string, // What the monkey says.  Ususally a 1-2 sentence solicitation.
	optionType: string, // What kind of responses the monkey offers
	options: Array<string>,  // The responses the monkey offers
	followups: Array<string>, // The monkey or monkeys that comes after this monkey.  If null, you are done!
    submit: string,  // label of the submit button
    hat: string // A general description of the monkey's head covering (all monkeys wear hats).
}