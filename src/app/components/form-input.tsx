export default function FormInput({name, ...rest}){
    return(
        <div className="flex flex-col mb-5">
            <input
                className="h-9 rounded-lg p-3"
                name={name}
                {...rest}
            />
        </div>
    )
}