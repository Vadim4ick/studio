import { IOption } from "../model/types"

const OptionList = ({ description }: IOption) => (
  <li className="text-sm leading-6">{description}</li>
)

export { OptionList }
