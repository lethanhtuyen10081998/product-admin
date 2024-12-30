import { internalApiInstance } from 'src/providers/authProvider';
import endpoints from '../endpoints';
import { useQuery } from '@tanstack/react-query';

export type GetListProductRequest = {
  page: number;
  size: number;
  keyword?: string;
  parent_id?: string;
};

export type GetListProductResponse = {
  data: {
    data: any[];
    total: number;
  };
};

export function getListProduct(request: GetListProductRequest): Promise<GetListProductResponse> {
  // return internalApiInstance.get(endpoints.LOCAL_API_PREFIX_AUTH, {
  //   params: {
  //     url: endpoints.PRODUCT_LIST,
  //     ...request,
  //   },
  // });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: [
            {
              id: 1,
              name: 'Gỗ thông - Giá Tốt, Miễn Phí Vận Chuyển, Đủ Loại 1',
              unit: 'Cái',
              price: 55000,
              amount: 1,
            },
            {
              id: 2,
              name: 'Bàn Gỗ thông - Giá Tốt',
              unit: 'Cái',
              price: 55000,
              amount: 3,
            },
            {
              id: 3,
              name: 'Giá đỗ - Giá Tốt, Miễn Phí Vận Chuyển, Đủ Loại 3',
              unit: 'Cái',
              price: 55000,
              amount: 3,
            },
            {
              id: 4,
              name: 'Sản phẩm 4',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 5,
              name: 'Sản phẩm 5',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 6,
              name: 'Sản phẩm 6',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 7,
              name: 'Sản phẩm 7',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 8,
              name: 'Sản phẩm 8',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 9,
              name: 'Sản phẩm 9',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 10,
              name: 'Sản phẩm 10',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 11,
              name: 'Sản phẩm 11',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 12,
              name: 'Sản phẩm 12',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 13,
              name: 'Sản phẩm 13',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 14,
              name: 'Sản phẩm 14',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 15,
              name: 'Sản phẩm 15',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 16,
              name: 'Sản phẩm 16',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 17,
              name: 'Sản phẩm 17',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 18,
              name: 'Sản phẩm 18',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 19,
              name: 'Sản phẩm 19',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
            {
              id: 20,
              name: 'Sản phẩm 20',
              unit: 'Cái',
              price: 60000,
              amount: 3,
            },
          ],
          total: 20,
        },
      });
    }, 5000);
  });
}

const useListProduct = (request: GetListProductRequest) => {
  const { data, ...others } = useQuery({
    queryKey: ['product-list', request],
    queryFn: () => getListProduct(request),
  });

  return {
    data: data?.data.data || [],
    total: data?.data.total || 0,
    ...others,
  };
};

export default useListProduct;
