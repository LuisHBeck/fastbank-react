interface Props {
	name: string;
	label: string;
	value: string;
	error?: string;
  type?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	name,
	error = "",
	value,
	label = "",
	onChange,
  type = "text"
}: Props) {
	return (
		<div>
			<label className="text-zinc-100 mb-1">
				{label}
				<input
          type={type}
					className="w-full p-2 outline-none rounded-sm bg-transparent border-zinc-100 text-zinc-100"
					name={name}
					value={value}
					onChange={onChange}
				/>
			</label>
			{error && <span className="text-red-500">{error}</span>}
		</div>
	);
}
