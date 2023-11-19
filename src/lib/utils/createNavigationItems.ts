interface Item {
    name: string;
    slug: string;
}

interface NavigationItem {
    title: string;
    href: string;
}

export const createNavigationLinks = (items: Item[], href: string ): NavigationItem[] => {
    return items.map(item => ({
        title: item.name,
        href: `/${href}/${item.slug}` // Modify the path as needed
    }));
}

