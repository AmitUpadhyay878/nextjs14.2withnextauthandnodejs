interface NavMenuItem {
    title: string;
    url: string;
    activeUrl: string;
    children?: NavMenuItem[];
}

export const Navmenu:NavMenuItem[] = [
    { 
        title: "Home",
        url: "/",
        activeUrl: "/"
    },
    { 
        title: "Contact Us",
        url: "/contact-us",
        activeUrl: "/contact-us"
    },
    // {
    //     title: "Products",
    //     url: "/products",
    //     activeUrl: "/products",
    //     children: [
    //         {
    //             title: "Product 1",
    //             url: "/products/product-1",
    //             activeUrl: "/products/product-1",
    //             children: [
    //                 {
    //                     title: "Subproduct A",
    //                     url: "/products/product-1/subproduct-a",
    //                     activeUrl: "/products/product-1/subproduct-a"
    //                 },
    //                 {
    //                     title: "Subproduct B",
    //                     url: "/products/product-1/subproduct-b",
    //                     activeUrl: "/products/product-1/subproduct-b"
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Product 2",
    //             url: "/products/product-2",
    //             activeUrl: "/products/product-2"
    //         }
    //     ]
    // }
]