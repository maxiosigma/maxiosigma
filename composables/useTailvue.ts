import { useToast, useModal } from 'tailvue'

export default function (content = '') {
    return { toast: useToast(), modal: useModal() }
}
