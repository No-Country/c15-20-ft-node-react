export default function InputCheckbox({ showPassword, setShowPassword }) {
  return (
    <label htmlFor='check' className=' pb-4'>
      Show Password{" "}
      <input
        id='check'
        type='checkbox'
        checked={showPassword}
        onChange={() => setShowPassword((prev) => !prev)}
      />
    </label>
  );
}
