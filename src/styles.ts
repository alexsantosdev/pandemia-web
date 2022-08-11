import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .main {
        display: flex;
        flex-direction: row;

        align-items: center;
        gap: 12px;

        width: 100%;
        height: 100vh;

        padding: 80px;
        
        .column {
            display: flex;
            flex-direction: column;

            justify-content: center;

            width: 48%;

            h2 {
                font-weight: 900;
                font-size: 72px;

                text-transform: uppercase;
                line-height: 64px;
            }

            button {
                border: none;
                background: none;

                border-radius: 8px;
                border: 1px solid #fff;

                padding: 12px;
                width: 14rem;

                display: flex;
                flex-direction: row;

                align-items: center;

                color: #fff;

                gap: 12px;
                margin-top: 2rem;

                cursor: pointer;

                &:hover {
                    transition: 0.4s;
                    opacity: 0.6;
                }

                img {
                    width: 32px;
                }

                div {
                    display: flex;
                    flex-direction: column;

                    align-items: flex-start;

                    padding: 0;
                    margin: 0;

                    gap: 8px;

                    span {
                        font-size: 12px;
                        line-height: 12px;

                        & + span {
                            font-size: 18px;
                            font-weight: 600;
                        }
                    }
                }
            }

            span.context {
                margin-top: 4rem;

                color: #727272;
            }
        }
    }

    .items {
        padding: 80px;

        display: flex;
        flex-direction: row;

        gap: 12px;

        align-items: flex-start;
        justify-content: space-between;

        div {
            width: 33%;

            display: flex;
            flex-direction: column;

            align-items: flex-start;

            h1 {
                font-size: 74px;
                line-height: 70px;
                font-weight: 900;
                text-transform: uppercase;

                margin-bottom: 1rem;
            }

            img {
                width: 280px;
                align-self: center;
            }

            span.title {
                color: #727272;
            }

            h2 {
                font-size: 48px;
                line-height: 42px;
                font-weight: 800;
                text-transform: uppercase;

                margin-bottom: 1rem;
            }

            div.row {
                display: flex;
                flex-direction: row;

                gap: 12px;

                margin-top: 1rem;

                img {
                    width: 60px;
                }

                div {
                    display: flex;
                    flex-direction: column;

                    width: max-content;

                    span {
                        width: max-content;
                        color: #8cc639;

                        & + span {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`