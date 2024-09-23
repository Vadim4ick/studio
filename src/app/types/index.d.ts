type ReactTagProps<T> = import("react").ComponentPropsWithRef<T>

// global.d.ts
interface Window {
  ym: (id: number, method: string, url: string) => void
}
