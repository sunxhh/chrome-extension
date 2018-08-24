let map = {
	a: {
		f: 6,
		b: 3.5
	},
	f: {
		g: 1,
		d: 5
	},
	b: {
		d: 3.5,
		c: 4
	},
	d: {
		e: 3,
		c: 2
	},
	c: {
		e: 4,
		d: 2,
		b: 4
	},
	e: {
		d: 3,
		c: 4
	},
	g: {

	}
}

let list1 = ['a'];
let list2 = ['b', 'c', 'd', 'e', 'f', 'g'];
let maplist = {
	a: {
		list: ['a'],
		d: 0
	}
};
while (list2.length > 0) {
	let min = 0;
	let strList = [];
	let index = 0;
	let jIndex = 0;
	for (let i = 0; i < list2.length; i++) {
		let residue = list2[i];
		for (let j = 0; j < list1.length; j++) {
			let select = list1[j];
			let parent = maplist[select];
			let distance = map[select][residue] + parent.d;
			if (distance) {
				if ((strList.length === 0 || min > distance) && parent.list.indexOf(residue) === -1) {
					min = distance;
					strList = [select, residue];
					index = i;
					jIndex = j;
				}
			}
		}
	}

	let p = maplist[list1[jIndex]];
	let waitPush = list2.splice(index, 1)[0];
	list1.push(waitPush);
	maplist[waitPush] = {
		list: Array.from(new Set(p.list.concat(strList))),
		d: min
	}


}

console.log(maplist)
