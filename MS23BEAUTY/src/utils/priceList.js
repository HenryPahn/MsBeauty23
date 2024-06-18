const newNote='JUNIOR PRICE is 30% lower cost (Contact only). Please kindly note: Junior tech will take 15-30m longer than expected.'

export const NAIL_SERVICES = [
	{
		name: 'Regular Polish services (air dry)',
		desciption: 'We offer OPI, Bio Seaweed Gel, DND among other brands for our regular polish selection. Regular manicures and pedicures can last about a week. We recommend you have your open toe shoe as this requests air dry.',
		servicesItems: [
			{
				name: 'Regular Manicure',
				price: '$28',
				description: 'The process includes single regular polish, cuticle preparation, nail shaping, hot towel and massage.',
			},
			{
				name: 'Deluxe Manicure',
				price: '+$15',
				description: 'The process has all regular steps and addition of scented exfoliation scrub, hand mask, and longer hand massage.',
			},
			{
				name: 'Regular Pedicuree',
				price: '$38',
				description: 'The process includes single regular polish, cuticle preparation, gentle exfoliation of feet, nail shaping, hot towel service and massage.',
			},
			{
				name: 'Deluxe Pedicure',
				price: '+$15',
				description: 'The process has all regular steps with the addition of scented exfoliation scrub, foot mask, and longer calf massage. (If you have a dry callus this is highly recommendation).',
			},
			{
				name: 'Regular Polish Change (Hands/feet)',
				price: '+$15 / +$20',
				description: 'The process includes only removal and application of single colour polish with nail shaping.',
			},
		]
	},
	{
		name: 'Gel/Shellac Services',
		desciption: 'Gel/Shellac can be expected to last about 2-3 weeks with care. We provide 1 week of guarantee.',
		servicesItems: [
			{
				name: 'Gel /Shellac Manicure',
				price: '$43',
				description: 'The process includes a single gel colour of choice, deep cuticle preparation, nail shaping, hot towel, and hand massage with cream and cuticle oil. At our salon (we provide the supper thin bio layer to make sure your gel color lasted 2-3 weeks).',
				note: newNote,
			},
			{
				name: 'Deluxe Gel/Shellac Manicure',
				price: '$55',
				description: 'The process has all steps with a gel manicure, adds scented exfoliation scrub, hand mask, and hand massage.',
				note: newNote,
			},
			{
				name: 'Gel/Shellac Pedicure',
				price: '$53',
				description: 'The process includes single gel colour of choice, cuticle preparation, gentle exfoliation of bottom feet, nail shaping, hot towel and massage.',
			},
			{
				name: 'Deluxe Gel/Shellac Pedicure',
				price: '$65',
				description: 'The process has everything included with a gel/shellac manicure, adds scented exfoliation scrub, hand mask, and extra foot massage.',
			},
			{
				name: 'Gel/Shellac Colour Change (Hands or feet)',
				price: '$30',
				description: 'The process includes single gel colour of choice, nail shaping and cuticle oil.',
			},
			{
				name: 'Gel/Shellac Removal',
				price: '$10',
				description: 'Includes removal by acetone/efile, shaping of nails, and cuticle oil.',
			},
		]
	},
	{
		name: 'Bio Gel / Dipping Services',
		desciption: 'This service can last at least 3- 4 weeks. We provide a week of guarantee. A Perfect choice for long nails or weak and brittle nails.',
		servicesItems: [
			{
				name: 'Bio Gel Overlay/Refill',
				price: '$65',
				description: 'The service includes a single gel colour of choice, applying a new bio layer, deep cuticle preparation, nail shaping, hot towel service and hand massage.',
				note: newNote,
			},
			{
				name: 'Dipping Overlay',
				price: '$65',
				description: 'The service includes a single dipping colour of choice, deep cuticle preparation, nail shaping, hot towel service and hand massage.',
			},
			{
				name: 'Extension Gel',
				price: '$90',
				description: 'The services lengthen your nail with a colour of choice, deep cuticle preparation, nail shaping, hot towel service and hand massage.',
				note: newNote,
			},
			{
				name: 'Bio Gel Refill',
				price: '$60',
				description: 'The process includes removal of existing gel color from a previous appointment, single colour of choice, reapplying a new bio layer ,deep cuticle preparation, nail shaping, hot towel service and hand massage.',
				note: 'Extra long lengths for an additional $5. ' + newNote
			},
			{
				name: 'Bio Gel removal',
				price: '$15',
				description: 'Includes removal by e-file, shaping of nails, and cuticle oil.',
			},
			{
				name: 'Acrylic/ Dipping removal',
				price: '$20',
				description: 'Includes removal by e-file, shaping of nails, and cuticle oil.',
			},
		]
	},
	{
		name: 'Nail Combo Services',
		desciption: '',
		servicesItems: [
			{
				name: 'Regular mani + regular pedi',
				price: '$60',
				description: '',
			},
			{
				name: 'Gel/Shellac mani + Gel/shellac pedi',
				price: '$90',
				description: '',
			},
			{
				name: 'Nail Design',
				price: '$5/nail',
				description: 'The price will be relayed on the style and complexity, please contact our team via Instagram or emails for an estimated quotation before booking your appointment!',
			},
			{
				name: 'Nail Repair / Fix With Extensions',
				price: '$10/nail',
				description: 'Application of a single extension to one finger. Includes removal of broken nail, nail shaping, single extension, and application of same colour.',
			},
			{
				name: 'Biogel removal',
				price: '$15',
				description: 'Includes removal by e-file, shaping of nails, and cuticle oil.',
			},
			{
				name: 'Acrylic / Dipping removal',
				price: '$20',
				description: 'Includes removal by e-file, shaping of nails, and cuticle oil.',
			},
		]
	}
]

export const OTHER_SERVICES = [
	{
		name: 'Eyelash Care',
		desciption: '',
		servicesItems: [
			{
				name: '3-Week Volume Fill (2 hrs)',
				price: '100$',
				description: '30-40% of your volume extensions must be intact from your previous appointment with Mirror Mirror. If less than 30-40%, a full lash set is required.',
			},
			{
				name: '3-Week Classic Fill (1 hr 15 mins)',
				price: '$75',
				description: '30-40% of your classic extensions must be intact from your previous appointment with Mirror Mirror. If less than 30-40%, a full lash set is required.',
			},
			{
				name: 'Full Classic /Asian Style (2 hrs)',
				price: '$100',
				description: 'The individual application of one lash to every natural lash. A classic lash extension set can result in a natural or dramatic appearance depending on the number of natural lashes you have. This style is suitable for those looking to create an accentuated “mascara” effect',
			},
			{
				name: 'Glamour Set (2 hrs 30 mins)',
				price: '$180',
				description: 'Lashes lightweight extensions are fanned out and applied to each natural eyelash. This technique gives a full and fluffy lash look.',
				note: 'Must have at least 40% of eyelash'
			},
			{
				name: 'Lash Lift + Tint (1 hr)',
				price: '$95',
				description: 'A semi-permanent treatment that curls upper natural lashes, coupled with lash tinting to make eyes pop. A vitamin A, B as well as B5 nourishing treatment is then applied as the final step to provide extra nutrients to hydrate and condition lashes. Lasts 6-8 weeks.',
			},
			{
				name: 'Lash Lift',
				price: 'ONLY $90',
				description: '',
			},
			{
				name: 'Lash Tint',
				price: '$20',
				description: 'New lash tint formula for fuller, more youthful lashes - Get darker and more natural-looking lashes without mascara.',
			},
			{
				name: 'Eyelash Extension Removal',
				price: '$20',
				description: 'This service is for removal of existing eyelash extensions.',
			},
		]
	},
	{
		name: 'Waxing',
		desciption: '',
		servicesItems: [
			{
				name: 'Face',
				price: '$10',
				description: 'Brow, lip, chin, side, and cheek wax. Bye-bye to your unibrow, moustache, sideburn, and neck hair. A full beauty package for your face that includes the waxing of the cheek, lip, chin, and eyebrow maintenance.',
			},
			{
				name: 'Body',
				price: '$55',
				description: '',
			},
			{
				name: 'Eyebrow tinting',
				price: '$20',
				description: '',
			},
			{
				name: 'Under Arm waxing',
				price: '$15',
				description: '',
			},
			{
				name: 'Eyebrow, Lip, Chin',
				price: '$20',
				description: '',
			},
			{
				name: 'Other',
				price: 'Contact',
				description: '',
			}
		]
	},
]