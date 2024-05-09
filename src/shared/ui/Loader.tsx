const Loader = () => (
  <div className="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] justify-center">
    <div
      // eslint-disable-next-line max-len
      className="inline-block size-10 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
      role="status"
      aria-label="loading"
    />
  </div>
);

export { Loader };
