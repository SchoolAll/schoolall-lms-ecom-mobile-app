import { ReactNode} from 'react'
export interface SectionProps {
    headerTitle: string
    Content?: ReactNode
    Header?: ReactNode
    Footer?: ReactNode
    hideHeader?: boolean
    hideFooter?: boolean
    ViewAllButtonPressAction?(): void 
    onPressSection?():void
};

export interface FooterProp {
    onPress(): void
}