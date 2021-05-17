
export function good() {
	console.log("good(): passed.");
}

export function messUp() {
	throw new Error("bad");
	console.log("messUp(): passed.");
}
