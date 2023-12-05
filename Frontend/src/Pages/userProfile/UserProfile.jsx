import { Button, Checkbox, Input } from "@chakra-ui/react";

export default function UserProfile() {
  return (
    <div className='space-y-12 p-6'>
      <section className='sm:grid sm:grid-cols-2 sm:gap-6 border-b-2 border-gray-200 pb-6'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Personal information</h2>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Update your personal information.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='space-y-2'>
            {/* <Label htmlFor='email'>Email</Label> */}
            <Input id='email' placeholder='Enter your email' type='email' />
          </div>
          <div className='space-y-2'>
            {/* <Label htmlFor='country'>Country</Label> */}
            <Input id='country' placeholder='Enter your country' />
          </div>
          <div className='space-y-2'>
            {/* <Label htmlFor='language'>Language</Label> */}
            <Input id='language' placeholder='Enter your language' />
          </div>
        </div>
      </section>
      <section className='sm:grid sm:grid-cols-2 sm:gap-6 border-b-2 border-gray-200 pb-6'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Profile details</h2>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Update your profile details.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='space-y-2'>
            {/* <Label htmlFor='avatar'>Avatar</Label> */}
            <Input id='avatar' type='file' />
          </div>
          <div className='space-y-2'>
            {/* <Label htmlFor='first-name'>First name</Label> */}
            <Input id='first-name' placeholder='Enter your first name' />
          </div>
          <div className='space-y-2'>
            {/* <Label htmlFor='last-name'>Last name</Label> */}
            <Input id='last-name' placeholder='Enter your last name' />
          </div>
          <div className='space-y-2'>
            {/* <Label htmlFor='username'>User name</Label> */}
            <Input id='username' placeholder='Enter your username' />
          </div>
          <div className='space-y-2'>
            {/* <Label htmlFor='mobile'>Mobile</Label> */}
            <Input id='mobile' placeholder='Enter your mobile number' />
          </div>
        </div>
      </section>
      <section className='sm:grid sm:grid-cols-2 sm:gap-6 border-b-2 border-gray-200 pb-6'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Notifications</h2>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Choose your notification preferences.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='flex items-center'>
            <Checkbox defaultChecked id='offers' />
            {/* <Label className='ml-2' htmlFor='offers'>
              Exclusive product offers
            </Label> */}
          </div>
          <div className='flex items-center'>
            <Checkbox defaultChecked id='news' />
            {/* <Label className='ml-2' htmlFor='news'>
              News
            </Label> */}
          </div>
        </div>
      </section>
      <div className='flex justify-end'>
        <Button>Save</Button>
      </div>
    </div>
  );
}
