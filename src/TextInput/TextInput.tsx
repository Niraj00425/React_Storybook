type TextInputProps = {
  label?: string
  placeholder?: string
  backgroundColor?: string
}

const TextInput = (props: TextInputProps) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <label htmlFor={props.label}>{props.label}</label>
      <input id={props.label} type='text' placeholder={props.placeholder} />
    </div>
  )
}

export default TextInput
