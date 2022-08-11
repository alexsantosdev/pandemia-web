import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 20px 80px;

    position: fixed;
    width: 100%;

    background: #0a0a0a;
    
    background: rgba(10, 10, 10, 0.6);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(10, 10, 10, 0.3);

    .left-side {
        display: flex;
        flex-direction: row;

        gap: 22px;

        align-items: center;

        img {
            width: 40px;
        }

        a {
            text-decoration: none;
            font-weight: 500;
            text-transform: uppercase;

            color: #fff;

            &:hover {
                transition: 0.4s;
                color: #22a650;
            }
        }
    }

    .right-side {
        display: flex;
        flex-direction: row;

        gap: 12px;

        a {
            text-decoration: none;

            img {
                width: 22px;
            }

            &:hover {
                transition: 0.4s;
                opacity: 0.6;
            }
        }
    }
`