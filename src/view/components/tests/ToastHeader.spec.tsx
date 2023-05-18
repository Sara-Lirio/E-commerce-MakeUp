import { render, screen } from "@testing-library/react"
import ToastHeader from "../ToastHeader"
import { QueryClientProvider, QueryClient } from "react-query"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

describe("ToastHeader", () => {
    const renderComponent = () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ToastHeader />
                </BrowserRouter>
            </QueryClientProvider>
        )
    }

    it("Testando a renderização do componente", () => {
        renderComponent();
        expect(screen.getByText("1ª compra? Ganhe 40% de desconto. #PRIMEIRACOMPRA.")).toBeInTheDocument();
    })

    it("Testando se existe o botão de fechar", () => {
        renderComponent();
        expect(screen.getByTestId('btnClose')).toBeInTheDocument()
    })

})