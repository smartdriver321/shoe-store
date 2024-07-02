import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <Button>
        <LoginLink>Log In</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Register</RegisterLink>
      </Button>
    </div>
  )
}
