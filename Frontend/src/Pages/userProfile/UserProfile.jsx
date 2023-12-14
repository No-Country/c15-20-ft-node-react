import { CardHeader, CardBody, CardFooter, Card } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import UpdatePassword from "../updatePass/UpdatePassword";

export default function UserProfile() {
  return (
    <div>
      <div />
      <main className='p-10'>
        <h1 className='text-3xl font-bold mb-10'>Cuenta</h1>
        <Card className='mb-10'>
          <CardHeader>
            <h1>Información Personal</h1>
            <p>Actualizar tu información personal.</p>
          </CardHeader>
          <CardBody className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='name'>Nombre</label>
              <Input id='name' required />
            </div>
            <div className='space-y-2'>
              <label htmlFor='email'>Email</label>
              <Input id='email' required type='email' />
            </div>
            <div className='space-y-2'>
              <label htmlFor='phone'>Número de teléfono</label>
              <Input id='phone' required />
            </div>
          </CardBody>
          <CardFooter>
            <Button>Actualizar</Button>
          </CardFooter>
        </Card>
        <UpdatePassword />
        <Card className='mb-10'>
          <CardHeader>
            <h2>Change Password</h2>
            <p>Update your password.</p>
          </CardHeader>
          <CardBody className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='currentPassword'>Current password</label>
              <Input id='currentPassword' required type='password' />
            </div>
            <div className='space-y-2'>
              <label htmlFor='newPassword'>New password</label>
              <Input id='newPassword' required type='password' />
            </div>
            <div className='space-y-2'>
              <label htmlFor='confirmNewPassword'>Confirm new password</label>
              <Input id='confirmNewPassword' required type='password' />
            </div>
          </CardBody>
          <CardFooter>
            <Button>Update Password</Button>
          </CardFooter>
        </Card>
        <Card className='mb-10'>
          <CardHeader>
            <h2>My Reviews</h2>
            <p>View and manage your reviews.</p>
          </CardHeader>
          <CardBody className='space-y-4'>
            <p className='text-gray-500'>No reviews yet.</p>
          </CardBody>
          <CardFooter>
            <Button>View All</Button>
          </CardFooter>
        </Card>
      </main>
      <div />
    </div>
  );
}
