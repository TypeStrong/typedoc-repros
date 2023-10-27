import { Foo } from '@whatever/inner'

export { Foo }

export class Bar extends Foo {
    baz(): string {
        return "123"
    }
}