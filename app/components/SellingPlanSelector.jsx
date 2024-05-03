import {useMemo} from 'react';
import {useLocation} from '@remix-run/react';

/**
 * A component that simplifies selecting sellingPlans subscription options
 * @example Example use
 * ```ts
 *   <SellingPlanSelector
 *     sellingPlanGroups={sellingPlanGroups}
 *     selectedSellingPlanId={selectedSellingPlanId}
 *   >
 *     {({sellingPlanGroup}) => ( ...your sellingPlanGroup component )}
 *  </SellingPlanSelector>
 *  ```
 **/
export function SellingPlanSelector({
  sellingPlanGroups,
  selectedSellingPlan,
  children,
  paramKey = 'selling_plan',
}) {
  const {search, pathname} = useLocation();
  const params = new URLSearchParams(search);

  return useMemo(
    () =>
      // @ts-ignore
      sellingPlanGroups.nodes.map((sellingPlanGroup) => {
        // Augmnet each sellingPlan node with isSelected and url
        const sellingPlans = sellingPlanGroup.sellingPlans.nodes
          .map((sellingPlan) => {
            if (!sellingPlan?.id) {
              // @ts-ignore
              console.warn(
                'SellingPlanSelector: sellingPlan.id is missing in the product query',
              );
              return null;
            }
            if (!sellingPlan.id) return null;
            params.set(paramKey, sellingPlan.id);
            sellingPlan.isSelected = selectedSellingPlan?.id === sellingPlan.id;
            sellingPlan.url = `${pathname}?${params.toString()}`;
            return sellingPlan;
          })
          .filter(Boolean);
        sellingPlanGroup.sellingPlans.nodes = sellingPlans;
        return children({sellingPlanGroup, selectedSellingPlan});
      }),
    [sellingPlanGroups],
  );
}
