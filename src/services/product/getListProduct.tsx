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
            { id: 1, name: 'Gỗ thông - Giá Tốt, Miễn Phí Vận Chuyển, Đủ Loại 1' },
            { id: 2, name: 'Gỗ thông - Giá Tốt, Miễn Phí Vận Chuyển, Đủ Loại 2' },
            { id: 3, name: 'Giá đỗ - Giá Tốt, Miễn Phí Vận Chuyển, Đủ Loại 3' },
          ],
          total: 10,
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
