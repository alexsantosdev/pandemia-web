import PandemiaLogo from '../../assets/icons/pandemia.svg'
import GitHubLogo from '../../assets/icons/github.svg'
import LinkedInLogo from '../../assets/icons/linkedin.svg'

import { Container } from './styles'

export function Navigation() {
    return(
        <Container>
            <div className="left-side">
                <img src={PandemiaLogo} alt='Pandemia Logo' />
                <a href='!#'>itens</a>
                <a href='!#'>personagens</a>
                <a href='!#'>projeto</a>
            </div>
            <div className="right-side">
                <a href='https://github.com/alexsantosdev/pandemia' target='_blank'>
                    <img src={GitHubLogo} alt='GitHub icon' />
                </a>
                <a href='https://linkedin.com/company/playpandemia' target='_blank'>
                    <img src={LinkedInLogo} alt='LinkedIn icon' />
                </a>
            </div>
        </Container>
    )
}