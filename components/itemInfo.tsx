type Props = {
	cpu?: string;
	gpu?: string;
	ram?: number;
	screen?: string;
	disc?: string;
	type?: string;
	comunication?: string;
	microphone?: string;
	anc?: string;
	resolution?: string;
	inter?: string;
	capacity?: number;
};

const ItemInfo = ({
	cpu,
	gpu,
	ram,
	screen,
	disc,
	type,
	comunication,
	microphone,
	anc,
	resolution,
	inter,
	capacity,
}: Props) => {
	return (
		<div className="flex flex-col justify-between py-2 font-semibold gap-2">
			{type ? <p className="text-sm">Type: {type}</p> : null}
			{cpu ? <p className="text-sm">CPU: {cpu}</p> : null}
			{gpu ? <p className="text-sm">GPU: {gpu}</p> : null}
			{ram ? <p className="text-sm">RAM: {ram} GB</p> : null}
			{comunication ? (
				<p className="text-sm">Comunication: {comunication}</p>
			) : null}
			{microphone ? <p className="text-sm">Microphone: {microphone}</p> : null}
			{anc ? <p className="text-sm">Noise Canceling: {anc}</p> : null}
			{disc ? <p className="text-sm">Disc: {disc} GB</p> : null}
			{screen ? <p className="text-sm">Screen: {screen} '</p> : null}
			{resolution ? <p className="text-sm">Resolution: {resolution}</p> : null}
			{inter ? <p className="text-sm">Interface: {inter}</p> : null}
			{capacity ? <p className="text-sm">Capacity: {capacity} GB</p> : null}
		</div>
	);
};

export default ItemInfo;
